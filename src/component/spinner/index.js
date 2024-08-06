import { GoGear } from 'react-icons/go';
import './styles.css';

export default function LoadingSpinner({ size, color, type }) {
  return (
    <div className='spinner'>
      <div className='loading-spinner'>
        {type === 'circular' ? (
          <img src='/svg/loader.svg' alt='circluar' />
        ) : (
          <GoGear size={size ? size : 100} color={color ? color : '2d86df'} />
        )}
      </div>
    </div>
  );
}
