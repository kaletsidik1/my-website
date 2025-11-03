// server component
export const metadata = {
  title: 'Kaletsidik Ayalew — Resume',
  description: 'Resume / CV of Kaletsidik Ayalew',
}

export default function ResumePage() {
  const drivePreview = 'https://drive.google.com/file/d/1zTuJ_0DJ4vETnUFQpoCMyUOyxudF8Cfa/preview';

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="py-6 border-b border-gray-800 text-center">
        <h1 className="text-2xl font-semibold">Kaletsidik Ayalew — Resume</h1>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="w-full h-[80vh] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={drivePreview}
              title="Kaletsidik Ayalew Resume"
              className="w-full h-full border-0"
            />
          </div>

          <p className="mt-4 text-sm text-gray-300">If the preview doesn't load, <a href={drivePreview} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline">open the resume in a new tab</a>.</p>
        </div>
      </main>
    </div>
  );
}
