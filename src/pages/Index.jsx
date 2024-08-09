import GhostInput from '../components/GhostInput';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Ghost Text Input Demo</h1>
        <p className="text-xl text-gray-600 mb-6">Watch the ghost text appear and disappear. Click to pause/resume.</p>
      </div>
      <div className="w-full max-w-md">
        <GhostInput ghostText="Welcome to the ghost input demo..." typingSpeed={100} deletingSpeed={50} />
      </div>
    </div>
  );
};

export default Index;
