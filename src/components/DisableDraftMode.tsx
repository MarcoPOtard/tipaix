'use client';

import { useIsPresentationTool } from 'next-sanity/hooks';

export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  // Dans le Presentation Tool, c'est le bouton "Quitter le mode brouillon"
  // du Studio qui gère ça — on n'affiche le nôtre qu'en dehors.
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 z-50 bg-tipaix-light text-black text-sm font-medium px-4 py-2 shadow-lg"
    >
      Quitter le mode brouillon
    </a>
  );
}
