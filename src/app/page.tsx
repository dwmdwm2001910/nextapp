import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/shadcn/button';

import $styles from './page.module.css';

const App: FC = () => (
    <main className={$styles.container}>
        <div className={$styles.block}>
            欢迎来到3R教室，这是<span>Nextjs课程的开始</span>
            <Button asChild variant="destructive">
                <Link href="https://3rcd.com" target="_blank">
                    查看官网
                </Link>
            </Button>
        </div>
    </main>
);
export default App;
