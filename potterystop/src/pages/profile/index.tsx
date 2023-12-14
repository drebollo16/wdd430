import { getSession } from 'next-auth/react';
import prisma from '@/lib/app';
import HeaderBar from '@/components/header';
import NavBar from '@/components/NavBar';

export default function Profile({ user }) {
  return (
    <>
    <link href="/styles/global.css" rel="stylesheet" />

      <HeaderBar />
      <NavBar />

      <main className="max-w-7xl mx-auto p-6 shadow-md">
      <h2>Profile Page Welcome {user.firstName + ' ' + user.lastName}</h2>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);

    return {
      notFound: true,
    };
  }
}
