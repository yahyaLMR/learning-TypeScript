
type Status = 'loading' | 'success' | 'error';

interface StatusMessageProps {
  status: Status;
}

const StatusMessage = ({ status }: StatusMessageProps) => {
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'success') {
    return <p>Operation successful!</p>;
  }
  if (status === 'error') {
    return <p>An error occurred.</p>;
  }
  return null;
};

export default StatusMessage;
