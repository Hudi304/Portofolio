
import { Redirect, Route, Switch} from 'react-router-dom'
import { UserProfilePage } from '../pages/account/account'
import { LoginPage } from '../pages/login/login'
import { Portofolio } from '../pages/portofolio/portofolio_page'


export function MainPage() : JSX.Element  {
    return (
        <Switch>
            <Route exact path={"/login"} component={() => <LoginPage />} />
            <Route exact path="/account" component={UserProfilePage} />
            <Route exact path="/portofolio" component={Portofolio} />

            <Route exact path={"/"}>
                <Redirect to='/portofolio'/>
            </Route>

        </Switch>

    )


}
