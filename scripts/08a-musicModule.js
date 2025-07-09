// 08a-musicModule.js

export const beats = ["Drill Loop", "Lofi Chill", "Trap 808"];

export function addBeat(beat) {
  beats.push(beat);
}

export class Producer {
  constructor(name) {
    this.name = name;
  }

  produce() {
    console.log(`🎼 ${this.name} is cooking a beat...`);
  }
}
