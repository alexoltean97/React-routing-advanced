import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {

    const error = useRouteError();
    let title = 'Am error occured'; 
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = JSON.parse(error.data).message
    }

    if(error.status === 404) {
        title = 'Not found!'
        message = 'Could not find resource or page'
    }

    return (
        <PageContent title="An error onccured">
            <p>{message}</p>
        </PageContent> 
    )
}

export default ErrorPage;