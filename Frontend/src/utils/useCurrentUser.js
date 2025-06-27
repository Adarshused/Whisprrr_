import {useQuery, useQueryClient} from '@tanstack/react-query'
import { fetchCurrentUser } from './Getme'

export function useCurrentUser() {
    const queryClient = useQueryClient()
     console.log("reached")
    const cachedUser = queryClient.getQueryData(['currentUser']);
    if(cachedUser) console.log("cache hit")
    return useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
    // don't ever refetch automatically
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60,
    // only run fetch if we don’t already have user
    enabled: !cachedUser,
    // immediately seed data if it’s cached
    initialData: cachedUser,
  })
}