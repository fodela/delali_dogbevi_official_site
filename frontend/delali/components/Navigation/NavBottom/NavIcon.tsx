const NavIcon = ({ icon, link }) => {
	return (
		<a
			className="text-[rgb(165,165,165)] justify-center"
			href={link}
			target="_blank"
		>
			{icon}
		</a>
	);
};

export default NavIcon;
