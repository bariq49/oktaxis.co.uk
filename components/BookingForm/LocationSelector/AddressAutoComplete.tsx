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
  const isPlaceSelected = useRef<boolean>(false); 

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
        types: restrictAirports ? ['locality', 'administrative_area_level_1', 'country'] : ['geocode'],
      });

      // Listener for place selection
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          isPlaceSelected.current = true;
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange, restrictAirports]);

  const handleBlur = () => {
    if (!isPlaceSelected.current) {
      onChange(''); 
      if (inputRef.current) {
        inputRef.current.value = ''; 
      }
    }
    isPlaceSelected.current = false; 
  };

  return (
    <input
      type="text"
      ref={inputRef}
      value={value}
      onChange={(e) => {
        isPlaceSelected.current = false; 
        onChange(e.target.value);
      }}
      onBlur={handleBlur} 
      placeholder={placeholder}
      className="w-[99%] text-[14px] font-normal border-none bg-white pl-4 pr-28 py-4 m-[2px] shadow-none focus:ring-0 focus:ring-offset-0"
      style={{ outline: 'none' }}
    />
  );
};

export default Autocomplete;
