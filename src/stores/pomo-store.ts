import { Pomo } from "../components/manage-pomo/";

export function createPomoStore() {
  return {
    pomos: [] as Pomo[],
    currentPomo: {} as Pomo,
    initAllPomos(pomos?: Pomo[]) {
      if (pomos) {
        this.pomos = pomos;
      } else {
        this.pomos = [
          {
            name: "default tomo",
            pomoMins: 25,
            longBreakMins: 15,
            shortBreakMins: 5
          },
          {
            name: "custome tomo 1",
            pomoMins: 25,
            longBreakMins: 15,
            shortBreakMins: 5
          },
          {
            name: "custome tomo 2",
            pomoMins: 25,
            longBreakMins: 15,
            shortBreakMins: 5
          },
          {
            name: "custome tomo 3",
            pomoMins: 25,
            longBreakMins: 15,
            shortBreakMins: 5
          },
          {
            name: "custome tomo 4",
            pomoMins: 25,
            longBreakMins: 15,
            shortBreakMins: 5
          }
        ];
      }
    },
    updateAllPomos(pomos: Pomo[]) {
      this.pomos = pomos;
    },
    setCurrentPomo(pomo: Pomo) {
      this.currentPomo = pomo;
    },
    setCurrentPomoByName(name: string) {
      this.currentPomo = <Pomo>this.allPomos.find(el => el.name === name);
    },
    get isEmpty() {
      return this.pomos.length === 0;
    },
    get allPomos() {
      return this.pomos;
    }
  };
}

export type PStore = ReturnType<typeof createPomoStore>;
