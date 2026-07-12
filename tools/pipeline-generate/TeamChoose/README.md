# TeamChoose generator

`data.mjs` is the source of truth for supported team tabs and their horizontal offsets.

Run from the repository root:

```bash
pnpm generate:TeamChoose
```

The command regenerates:

- `assets/resource/pipeline/SceneManager/TeamChooseTeams.json`
- `assets/tasks/TeamChoose.json`

To add another team tab, increase `TEAM_COUNT` after confirming the new tab spacing remains 71 pixels at 720p.
