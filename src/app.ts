import * as m from 'mithril';
import { FriendCard } from './components/FriendCard'

function MainApp(): m.Component<{}> {
    let friends: any[] = [
        {
            name: "Me",
            occupation: "loser"
        }
    ];

    return {
        view({ attrs }) {
            return m("div",
                m("a", {
                    class: "btn btn-primary",
                    href: "#",
                    onclick: function (event) {
                        event.preventDefault();
                        m.request({
                            method: "GET",
                            url: "/friends"
                        })
                            .then(function (result:any) {
                                console.log(result)
                                friends.push(...result);
                            })
                    }
                }, "Get More Friends"),
                m("div", {},
                    friends.map(friend => {
                        return m(FriendCard, {
                            name: friend.name,
                            occupation: friend.occupation                            
                        })
                    })
                )
            )
        }
    };
}

m.mount(document.getElementById("app"), MainApp);