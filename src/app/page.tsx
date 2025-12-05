import HeroSection from '@/components/organisms/HeroSection';
import Footer from '@/components/organisms/Footer';

interface Candidate {
  name: string;
  role: string;
  flag: string;
  avatar: string;
  tags: string[];
}

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic';

async function getCandidates(): Promise<Candidate[]> {
  try {
    // Use relative URL for internal API calls in SSR
    const res = await fetch('/api/candidates', {
      cache: 'no-store', // Ensure fresh data on each SSR request
    });

    if (!res.ok) {
      throw new Error('Failed to fetch candidates');
    }

    const response = await res.json();

    if (!response.success) {
      throw new Error(response.error || 'Failed to fetch candidates');
    }

    return response.data || [];
  } catch (error) {
    console.error('Error fetching candidates:', error);
    // Return empty array as fallback
    return [];
  }
}

export default async function Home() {
  const candidates = await getCandidates();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection candidates={candidates} />
      <Footer />
    </div>
  );
}
