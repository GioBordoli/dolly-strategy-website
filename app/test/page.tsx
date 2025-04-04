import EnglishLayout from '../layout-en';

export default function TestPage() {
  return (
    <EnglishLayout>
      <div className="container-custom mx-auto py-16">
        <h1 className="text-3xl font-bold mb-4">Test Page</h1>
        <p>This is a simple test page to verify that routing is working correctly.</p>
      </div>
    </EnglishLayout>
  );
} 