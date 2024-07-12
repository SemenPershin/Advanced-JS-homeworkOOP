import { Daemon } from "../Daemon";

test('Summon daemon', () => {
    const daemon = new Daemon("daemon");
    expect(daemon).toEqual({
        "name": "daemon",
        "type": "Daemon",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    })
})