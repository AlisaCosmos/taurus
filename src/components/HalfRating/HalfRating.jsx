import * as React from 'react';
import Rating, { ratingClasses } from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import './HalfRating.scss';

export default function HalfRating({ rating }) {
  return (
    <Stack spacing={1}>
      <Rating
        className="halfRating"
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
