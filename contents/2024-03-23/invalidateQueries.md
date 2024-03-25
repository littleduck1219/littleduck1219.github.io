---
date: '2024-03-23'
title: 'Tanstack Query로 데이터 상태 변경하기'
categories: ['Web', 'React', 'Next.JS', 'Tanstack Query']
summary: '데이터 캐시 무효화고 최신화 경험'
thumbnail: './invalidateQueries.png'
---

## 경험

작업의 상태를 변경해주는 mutation을 했지만 업데이트한 데이터가 최신화가 되지 않아 바뀐 상태가 반영되지 않고 있었습니다.

`useEffect`나 상태관리 라이브러리 `zustand`를 사용해서 상태를 관리하고 업데이트 하려고 하였으나 `Next`를 사용한 프로젝트이고, `server component`를 고려했을 떄 react hooks를 사용하지 못하는것과 상태관리 라이브러리를 사용했을때 issue 전체가 변하는등 제가 원하대로 구현하기가 쉽지 않았기 때문에 고민이 많았습니다. 그러다 `prisma`의 `findUnique`를 사용해서 데이터 불러오던 것을 `Tanstack Query(React Query)`를 사용하여 `useMutation`의 속성인 `invalidateQueries`를 사용해서 캐시된 데이터를 무효화 시키고 데이터를 갱신 하기로 했습니다.

## 해결

**invalidateQueries**

`invalidateQueries` 함수는 쿼리를 무효화하여 새로운 데이터를 다시 가져오도록 유도하는 데 사용됩니다. 이 함수는 캐시된 데이터를 갱신하거나 데이터 소스로부터 새로운 데이터를 다시 가져와야 할 때 유용합니다.

주로 데이터가 업데이트되었거나 새로운 데이터로 대체되어야 할 때 사용됩니다. 예를 들어, 사용자가 어떤 항목을 생성, 업데이트 또는 삭제한 후에는 해당 항목과 관련된 쿼리를 무효화하여 새로운 데이터를 가져오도록 할 수 있습니다.

**issueDetail**

```tsx
const { data: issue, isLoading } = useQuery({
  queryKey: ['issue'],
  queryFn: async () => {
    const response = await axios.get(`/api/issues/${params.id}`);
    return response.data;
  },
  staleTime: 0,
});
```

`staleTime` 옵션은 Tanstack Query에서 쿼리의 데이터가 "스테일"하게 만들어지는 시간을 설정하는 데 사용됩니다. 스테일 데이터란 쿼리의 데이터가 여전히 유효하지만 캐시된 데이터가 서버의 최신 데이터와 동기화되지 않은 상태를 의미합니다.

`staleTime`을 0으로 설정하면 Tanstack Query가 캐시된 데이터를 사용하지 않고 항상 새로운 데이터를 가져오려고 시도합니다. 즉, 캐시된 데이터가 스테일하지 않게 만들어집니다. 따라서 매번 새로운 요청이 서버에 전송되고 새로운 데이터가 받아지게 됩니다.

**StatusSelect**

```tsx
const updateIssueStatus = useMutation({
  mutationKey: ['issue'],
  mutationFn: async (status: Status) => {
    return axios.patch(`/api/issues/${issue.id}`, { status });
  },

  onSuccess: (data, variables) => {
    stateStatue.setStatus(variables);
    console.log(variables);
    queryClient.invalidateQueries({ queryKey: ['issue'] });
  },
  onError: error => {
    console.error('Error updating issue status:', error);
  },
});

const handleStatusChange = (selectedStatus: Status) => {
  updateIssueStatus.mutate(selectedStatus);
};

    return (
        <>
            <Select.Root defaultValue={issue.status} onValueChange={handleStatusChange}>
                <Select.Trigger placeholder='status' />
```

`onSuccess` 콜백 함수는 뮤테이션이 성공적으로 완료된 후에 실행됩니다. 여기서는 해당 이슈의 상태를 변경한 후에 실행됩니다. `onSuccess` 함수 내에서는 먼저 이전에 성공적으로 완료된 뮤테이션에서 사용된 변수들을 얻어옵니다(variables).

그 후에, `invalidateQueries` 함수가 호출됩니다. 여기서 { queryKey: ['issue'] }를 인자로 전달하여, 'issue'라는 쿼리 키를 가진 쿼리를 무효화합니다. 이는 Tanstack Query가 해당 쿼리를 재실행하여 최신 데이터를 가져오도록 유도합니다.

## 후기

SSR을 고려하여 컴포넌트 설계를 치밀하게 해아하는 Next에서, 어떻게 업데이트를 해줘야 하나 막막했었는데, 가뭄에 단비랄까 갑자기 캐시가 떠올랐고 ... Tanstack Query?... 오?! 하고 써먹어 보았는데 너무 편하게 데이터를 새로 불러올 수 있었습니다. Tanstack Query에서 자주쓰이는 useQuery와 useMutation에는 다양한 함수가 존재하는데 적절이 사용해보면 오늘과 같은 좋은 코드가 나올 수 있을 것 같다는 생각이 들어 다음에 한번 찾아보고 정리해야할 것 같습니다.

![1](https://i.ibb.co/b2v16hS/Mar-23-2024-16-25-14.gif)
