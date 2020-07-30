import * as m from 'mithril';

interface Attrs {
    name: string;
    occupation: string;
}

export function FriendCard(): m.Component<Attrs> {
    return {
        view({ attrs }) {
            return m("div.card", { class: "mt-2 mb-2" },
                m("div.card-body",
                    [
                        m("div", attrs.name),
                        m("small", { class: "text-muted" }, attrs.occupation),
                    ]
                )
            )
        }
    };
}