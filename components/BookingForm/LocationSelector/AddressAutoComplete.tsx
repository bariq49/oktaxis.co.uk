'use client';
import React, { useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  restrictAirports?: boolean;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  value,
  onChange,
  placeholder = 'Enter a location',
  restrictAirports = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteRef.current) {
      // Initialize Autocomplete with restricted types
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        fields: ['place_id', 'geometry', 'name', 'formatted_address', 'types'],
        componentRestrictions: { country: 'uk' },
        // Restrict to only locations and not establishments like airports
        types: restrictAirports ? ['locality', 'administrative_area_level_1', 'country'] : ['geocode'],
      });

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange, restrictAirports]);

  return (
    <input
      type="text"
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-[99%] text-[14px] font-normal border-none bg-white pl-4 pr-28 py-4 m-[2px] shadow-none focus:ring-0 focus:ring-offset-0"
      style={{ outline: 'none' }}
    />
  );
};

export default Autocomplete;
