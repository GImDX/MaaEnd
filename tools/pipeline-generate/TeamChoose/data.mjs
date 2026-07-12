export const TEAM_COUNT = 5;

export default Array.from({length: TEAM_COUNT}, (_, index) => ({
    TeamId: String(index + 1).padStart(2, "0"),
    TabOffsetX: 44 + index * 71,
}));
