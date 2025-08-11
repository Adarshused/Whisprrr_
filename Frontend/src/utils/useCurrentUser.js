import {useQueries, useQueryClient} from '@tanstack/react-query'
import { fetchCurrentUser } from './Getme'
import {GetAllFaculty} from './GetAllUsers'

export function useCurrentUser() {

    const queryClient = useQueryClient()
    //  console.log("reached")
    const cachedUser = queryClient.getQueryData(['currentUser']);
    const cachedFaculties = queryClient.getQueryData(['AllFaculties']);
    
    if(cachedUser && cachedFaculties) console.log("cache hit")
    const results =  useQueries({

      queries: [
        {
          queryKey: ['currentUser'],
          queryFn: fetchCurrentUser,
          // don't ever refetch automatically
          staleTime: Infinity,
          cacheTime: 1000 * 60 * 60,
          // only run fetch if we don’t already have user
          enabled: !cachedUser,
          // immediately seed data if it’s cached
         initialData: cachedUser,
         },
         {
          queryKey: ['AllFaculties'],
          queryFn: GetAllFaculty,

          staleTime: Infinity,
          cacheTime: 1000 * 60 * 60,
          enabled: !cachedFaculties,

          initialData: cachedFaculties
         }
      ]
    
  });
  console.log("results", results)
  const [userQ, facultiesQ] = results;
  return  {
    data: { user: userQ.data, faculties: facultiesQ.data },
    isLoading: userQ.isLoading || facultiesQ.isLoading,
    isFetching: userQ.isFetching || facultiesQ.isFetching,
    isError: userQ.isError || facultiesQ.isError,
    // optionally expose the raw queries too
    userQ, facultiesQ
  };
}
