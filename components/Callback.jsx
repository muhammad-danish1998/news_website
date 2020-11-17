import { useRouter } from 'next/router'
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { saveJWT } from '../utils/auth';

export default function Callback({ provider }) {
    const router = useRouter();
    console.log(router);
    const query = router.asPath.split(`/${provider}-callback?`)[1];

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `https://akhbar.thewickfirm.com/auth/${provider}/callback?` + query)
            console.log('received');
            console.log(res.data);
            if (res.data.jwt) {
                router.push('/');
                saveJWT(res.data.jwt);
            }
            else {
                router.push('/login');
            }
        }
        console.log(query);
        if (query) getData()
        else router.push('/login')
    }, []);
    
    return (
        <Spinner/>
    )
}