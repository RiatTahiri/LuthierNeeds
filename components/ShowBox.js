import Image from 'next/image';

const ShowBox = ({title, desc}) => {
    return (
        <div>
            <Image src='/public/classical_guitar.png' width={30} height={40}></Image>
            <strong>{title}</strong>

            <p>{desc}</p>
        </div>
    )
}

export default ShowBox;