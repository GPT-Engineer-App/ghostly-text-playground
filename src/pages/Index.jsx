import GhostInput from '../components/GhostInput';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Micro Startup Idea Generator</h1>
        <p className="text-xl text-gray-600 mb-6">Get inspired by these innovative micro startup ideas. Click to pause/resume.</p>
      </div>
      <div className="w-full max-w-md">
        <GhostInput typingSpeed={50} pauseDuration={2000} />
      </div>
    </div>
  );
};

export default Index;
