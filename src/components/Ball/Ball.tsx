import "./Ball.css";

interface BallProps {
    ballNumber: number;
}

const Ball: React.FC<BallProps> = ({ballNumber}) => {
    return (
        <div className='circle'>{ballNumber}</div>
    );
};
export default Ball;