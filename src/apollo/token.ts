import { firestore } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

async function fetchToken(): Promise<string | null> {
    try {
        const query = await getDocs(collection(firestore, 'token'));
        if (!query.empty) {
            const firstDoc = query.docs[0];
            const data = firstDoc.data();
            return data.gitToken;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching token:', error);
        return null;
    }
}

export const token = await fetchToken();
