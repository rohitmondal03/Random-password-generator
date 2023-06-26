import * as Progress from '@radix-ui/react-progress';


const ProgressDemo = (props) => {
    const { progressBarLength, progressBarBackgroundColor } = props;

    return (
        <Progress.Root
            className="relative overflow-hidden bg-zinc-200 rounded-full w-[400px] h-[20px] mx-auto"
        >
            <Progress.Indicator
                className='bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
                style={{ transition: ' 0.3s', transform: `translateX(-${100 - progressBarLength}%)`, backgroundColor: `${progressBarBackgroundColor}` }}
            />
        </Progress.Root>
    );
};

export default ProgressDemo;