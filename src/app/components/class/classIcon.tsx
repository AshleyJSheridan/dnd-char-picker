export default function ClassIcon({charClassName}) {
    function getClassIconImage(charClassName: string) {
        return `/img/class icons/Class Icon - ${charClassName}.svg`;
    }

    return (
        <img className="class-icon" src={getClassIconImage(charClassName)} alt=""/>
    );
}