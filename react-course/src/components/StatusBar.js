// import { useState, useEffect } from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

export default function StatusBar() {
    const isOnline = useOnlineStatus()
    // const [isOnline, setIsOnline] = useState(true);
    // useEffect(() => {
    //     function handleOnline() {
    //         console.log('online');
    //         setIsOnline(true);
    //     }
    //     function handleOffline() {
    //         console.log('offline');
    //         setIsOnline(false);
    //     }
    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);
    //     return () => {
    //         window.removeEventListener('online', handleOnline);
    //         window.removeEventListener('offline', handleOffline);
    //     };
    // }, []);

    return <>
        <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </>;
}