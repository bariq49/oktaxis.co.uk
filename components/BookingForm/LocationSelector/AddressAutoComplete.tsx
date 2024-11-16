// components/Autocomplete.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  value,
  onChange,
  placeholder = 'Enter a location',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'], // This is necessary for the Autocomplete functionality
  });

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteRef.current) {
      // Initialize the autocomplete instance
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        fields: ['place_id', 'geometry', 'name', 'formatted_address'],
        types: ['geocode'], 
        componentRestrictions: { country: 'uk' },
      });

      // Add listener for place_changed event
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange]);

  return (
    <input
      type="text"
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full text-[16px] font-normal border-none bg-white pl-4 pr-28 py-4 shadow-none focus:ring-0 focus:ring-offset-0"
    />
  );
};

export default Autocomplete;
