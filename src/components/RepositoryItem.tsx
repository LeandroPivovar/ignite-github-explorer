import React from 'react'

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps){

    const {name, description, html_url} = props.repository ?? {}

    return (
        <>
            <li>
                <strong>{name ?? 'Repository default'}</strong>
                <p>{description}</p>
                <a href={html_url}>Acessar Repositório</a>
            </li>
        </>
    )
}