// quick fix for creating a randomizer function

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

