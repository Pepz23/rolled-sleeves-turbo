import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import ProjectsContent from 'components/projects/ProjectsContent'
import ProjectStoreInitializer from 'components/util/ProjectStoreInitializer'
import type { ProjectsContentProps } from 'components/projects/ProjectsContent'
import { getAllProjects } from 'utils/contentful/client'

export const metadata = {
    title: 'Our Work | Garrett Kitchens',
    description:
        'Take a look at some of our recent work which we hope will help give you some ideas includes a range of projects such as handleless kitchen installations, traditional kitchen designs and of course modern kitchens.',
    openGraph: {
        title: 'Our Work | Garrett Kitchens',
        description:
            'Take a look at some of our recent work which we hope will help give you some ideas includes a range of projects such as handleless kitchen installations, traditional kitchen designs and of course modern kitchens.',
    },
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Our Work', href: '/our-work' },
]

const content: ProjectsContentProps = {
    title: 'Our Work',
    description: 'A selection of our completed projects.',
    filters: [
        {
            id: 'priceGroup',
            name: 'Price Group',
            options: [
                { value: '£', label: '£' },
                { value: '££', label: '££' },
                { value: '£££', label: '£££' },
                { value: '££££', label: '££££' },
                { value: '£££££', label: '£££££' },
            ],
        },
    ],
}

export default async function Page() {
    const projects = await getAllProjects()

    return (
        <>
            <ProjectStoreInitializer projects={projects} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProjectsContent {...content} />
        </>
    )
}
