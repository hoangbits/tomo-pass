import { Pomo } from "../components/manage-pomo/";

export function createPomoStore() {
  return {
    pomos: [] as Pomo[],
    currentPomo: {},
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
    get isEmpty() {
      return this.pomos.length === 0;
    }
  };
}

export type PStore = ReturnType<typeof createPomoStore>;
