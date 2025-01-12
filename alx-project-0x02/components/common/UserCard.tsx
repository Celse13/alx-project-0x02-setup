import React from 'react';
import Card from './Card';
import { UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <Card title={name} content={email}>
      <div className="mt-2 text-sm text-gray-600">
        <p>{address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </Card>
  );
}
