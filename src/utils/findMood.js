export const findMood = (moods, query) => {
    if (!moods || !query) {
        return [];
    }

    const lowercaseQuery = query?.toLowerCase();

    return moods.filter(
        (md) => md && md.mood && md.mood.toLowerCase() === lowercaseQuery
    );
};
