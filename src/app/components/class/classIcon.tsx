export default function ClassIcon({charClassName}: {charClassName: string}) {
    function getClassIconImage(charClassName: string) {
        return `/img/class icons/Class Icon - ${charClassName}.svg`;
    }

    return (
        <img className="class-icon" src={getClassIconImage(charClassName)} alt=""/>
    );
}