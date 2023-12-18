import { TSeason } from "./types"
import { seasons } from "./data"

// 1 задание - найти приблизительный сезон

let maxIncomeSeason: TSeason | null = null
let nameMaxIncomeSeason: string = ""
Object.entries(seasons).forEach(([season, seasonInfo]) => {
    if (!maxIncomeSeason || maxIncomeSeason.income < seasonInfo.income) {
        maxIncomeSeason = seasonInfo
        nameMaxIncomeSeason = season
    }
})
export const finishMaxSeason = {
    seasonName: nameMaxIncomeSeason,
    info: maxIncomeSeason
}
