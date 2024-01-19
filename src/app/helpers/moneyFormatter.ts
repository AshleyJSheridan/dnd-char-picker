export function formatMoney(gold: number) {
    let copper = Math.floor(gold * 100);
    let silver = Math.floor(copper / 10);
    gold = Math.floor(silver / 10);
    silver = silver - (gold * 10);
    copper = copper - (gold * 100) - (silver * 10);

    let goldStr = gold > 0 ? `${gold}gp ` : '';
    let silverStr = silver > 0 ? `${silver}sp ` : '';
    let copperStr = copper > 0 ? `${copper}cp` : '';

    return `${goldStr}${silverStr}${copperStr}`;
}