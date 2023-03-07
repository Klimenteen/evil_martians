const animList = ["animation-jiggle", "animation-jump", "animation-runaway"];
let prevAnim = "";

export const randomAnim = () => {
    let anim = animList[Math.floor(Math.random() * animList.length)];
    if (prevAnim === anim) {
        anim = randomAnim();
    }
    prevAnim = anim;
    return anim;
};