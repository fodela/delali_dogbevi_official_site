import Link from "next/link";
interface NavigationLinkTypes {
	name: string;
	link: string;
}
const NavigationLink: React.FC<NavigationLinkTypes> = (props) => {
	return (
		<Link href={props.link}>
			<a className="text-gray-400 text-center py-2 hover:text-[rgb(49,206,227)] transition-all">
				{props.name}
			</a>
		</Link>
	);
};

export default NavigationLink;
