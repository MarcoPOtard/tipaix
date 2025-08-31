import { Show } from "@/types";

export const mockShows: Show[] = [
    {
        id: "1",
        title: "Match d'impro",
        date: "2025-09-27",
        time: "19h00",
        venue: "Espace Ughetti",
        address: "Allée Serge Attard, 13080 Aix-en-Provence",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        description:
            "Une soirée d'improvisation théâtrale pleine de rires et de surprises. Venez découvrir l'art de l'impro avec Tipaix !",
        reservationUrl: "https://example.com/reserve/1",
    },
    {
        id: "2",
        title: "Match d'Impro",
        date: "2025-11-15",
        time: "19h00",
        venue: "Espace Ughetti",
        address: "Allée Serge Attard, 13080 Aix-en-Provence",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
        description:
            "Un match d'improvisation théâtrale opposant Tipaix à une troupe invitée. Sport et théâtre réunis !",
        reservationUrl: "https://example.com/reserve/2",
    }
];
