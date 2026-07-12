import teams from "./data.mjs";

export default [
    {
        TeamCases: teams.map(({TeamId}) => ({
            name: `TeamChoose${TeamId}`,
            label: TeamId,
            pipeline_override: {
                TeamChooseStart: {
                    custom_action_param: {
                        sub: [`SceneChooseTeam${TeamId}`],
                    },
                },
            },
        })),
    },
];
