import React, { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

import { motion } from 'framer-motion';


const ProgressDemo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root
            className="relative overflow-hidden bg-zinc-200 rounded-full w-[400px] h-[20px] mx-auto"
            value={progress}
        >
            <Progress.Indicator
                className="bg-red-500 w-[20px] h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            />
        </Progress.Root>
    );
};

export default ProgressDemo;