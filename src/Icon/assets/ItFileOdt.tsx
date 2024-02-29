import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule='evenodd'
        d='M6.5 2h8.2L19 6.3v14.2a1.5 1.5 0 0 1-1.5 1.5H16v-1h1.5a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 14 5.5V3H6.5a.5.5 0 0 0-.5.5V16H5V3.5A1.5 1.5 0 0 1 6.5 2Zm10.8 4L15 3.7v1.8a.5.5 0 0 0 .5.5h1.8Z'
      />
      <path d='M4.214 20.778c.143.247.405.37.789.37.383 0 .644-.123.781-.37.142-.25.213-.667.213-1.25 0-.587-.07-1.013-.213-1.278-.142-.265-.402-.398-.781-.398s-.64.133-.781.398c-.142.265-.213.691-.213 1.278 0 .583.068 1 .205 1.25Zm2.337.625c-.298.398-.814.597-1.548.597-.734 0-1.253-.199-1.556-.597C3.15 21.001 3 20.373 3 19.521c0-.852.15-1.484.447-1.896.303-.417.822-.625 1.556-.625.734 0 1.25.208 1.548.625.303.412.455 1.044.455 1.896 0 .853-.152 1.48-.455 1.882ZM9.473 21.915H7.846v-4.83h1.627c.416 0 .76.045 1.03.135.27.085.478.23.624.433.152.2.256.436.313.71.057.27.085.623.085 1.059 0 .436-.026.798-.078 1.087-.052.284-.151.54-.298.767-.142.222-.35.386-.625.49-.275.1-.625.149-1.051.149Zm1.03-1.918c.009-.151.014-.36.014-.625 0-.27-.01-.485-.029-.646a1.227 1.227 0 0 0-.135-.44.547.547 0 0 0-.32-.27 1.627 1.627 0 0 0-.56-.078h-.647v3.125h.647c.355 0 .613-.09.774-.27.137-.147.222-.412.255-.796ZM11.907 17.952v-.867h3.552v.867H14.18v3.963h-.98v-3.963h-1.293Z' />
    </svg>
  );
};
