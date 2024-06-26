import { Toaster } from 'sonner';
import { CharacterList } from './components/list';

function App() {
    return (
        <main className='bg-slate-950 space-y-4 p-4'>
            <h1 className='text-yellow-400'>A long time ago in a galaxy far, far away...</h1>
            <CharacterList />
            <Toaster />
        </main>
    )
}

export default App
