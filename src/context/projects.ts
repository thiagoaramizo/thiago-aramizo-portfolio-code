
export interface Project {
    name: string
    code: string
    description: string
    link?: string
    image: string
}

export const projects: Project[] = [
    {
        name: 'Projeto de exemplo',
        code: 'exemplo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit lectus ac ligula iaculis, sed ullamcorper enim varius. Praesent lobortis urna ipsum, quis rutrum leo facilisis eu. Ut auctor rhoncus mi, quis volutpat urna tempor ac. Nullam id porta turpis, quis pretium lacus. Sed sit amet enim scelerisque, luctus erat vitae, mattis nulla. Integer vel faucibus nibh. Integer purus orci, pulvinar vel ullamcorper non, sagittis eu ante. Ut volutpat maximus est, nec euismod magna auctor vitae. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet felis velit, ac aliquam erat placerat ut.',
        link: 'https://google.com',
        image: '/projetos/computador_interface.png'
    },
    {
        name: 'Projeto de exemplo2',
        code: 'exemplo2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit lectus ac ligula iaculis, sed ullamcorper enim varius. Praesent lobortis urna ipsum, quis rutrum leo facilisis eu. Ut auctor rhoncus mi, quis volutpat urna tempor ac. Nullam id porta turpis, quis pretium lacus. Sed sit amet enim scelerisque, luctus erat vitae, mattis nulla. Integer vel faucibus nibh. Integer purus orci, pulvinar vel ullamcorper non, sagittis eu ante. Ut volutpat maximus est, nec euismod magna auctor vitae. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet felis velit, ac aliquam erat placerat ut.',
        link: 'https://google.com',
        image: '/projetos/computador_interface.png'
    }
]