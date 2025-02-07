import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { BorderBeam } from './ui/border-beam';

interface ProfileCardProps {
  name: string;
  designation: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, designation, imageUrl }) => {
  return (
    <div>
      <Card
        className="overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105"
        style={{
          animation: 'borderAnimation 5s infinite alternate',
          borderRadius: '16px', // Rounded border for a modern look
          width: '100%', // 100% of the parent container width
          maxWidth: '230px', // Max width to maintain a reasonable size
          height: 'auto', // Height will adjust according to the aspect ratio
          aspectRatio: '3/4', // Maintain 3:4 aspect ratio (width:height)
        }}
      >
        <BorderBeam borderWidth={2} />

        {/* Image (80% of card height) */}
        <CardMedia
          component="img"
          image={imageUrl || 'https://via.placeholder.com/230x256'} // Default image URL if no image is provided
          alt={name}
          style={{
            objectFit: 'contain', // Ensure the image covers the entire area
            height: '80%', // 80% of the card height
            width: '100%',
            backgroundColor: "#E1F0DA"
          }}
        />

        {/* Content (20% of card height) */}
        <CardContent
          className="flex flex-col justify-center items-center p-3"
          style={{
            backgroundColor: '#99BC85', // Light background for content area
            borderTop: '1px solid #ddd', // Slight divider between image and content
            height: '20%', // 20% of the card height
          }}
        >
          <Typography variant="h6" className="text-center text-gray-800 font-semibold text-sm">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="text-center mt-1 text-sm">
            {designation}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
