const data = [
  {
    data: {
      sample: {
        test: ['not here', 'not here', 'not here'],
        moreTests: {
          list: ['not here', 'not here'],
          list2: ['not here']
        }
      },
      additionalData: {
        sample: {
          test: ['not here', 'not here', 'not here'],
          moreTests: {
            list: ['not here', 'not here'],
            list2: ['not here']
          }
        },
      }
    },
    data2: {
      sample: {
        test: ['not here', 'not here', 'not here'],
        moreTests: {
          list: ['not here', 'not here'],
          list2: ['not here']
        }
      }
    }
  },

  {
    someMoreData: [
      {
        sample: 'not here',
        list: [
          {
            data: ['not here', 'not here'],
            data2 :[
              {
                sample: {
                  test: ['not here', 'not here', 'not here'],
                  moreTests: {
                    list: ['not here', 'not here'],
                    list2: ['not here']
                  }
                }
              }
            ]
          }
        ] 
      },
      {
        sample: 'not here',
        list: [
          {
            data: ['not here', 'not here'],
            data2 :[
              {
                sample:  {
                  test: ['not here', 'not here', 'you found me!'],
                  moreTests: {
                    list: ['not here', 'not here'],
                    list2: ['not here']
                  }
                }
              }
            ]
          }
        ] 
      },
      {
        sample: 'not here',
        list: [
          {
            data: ['not here', 'not here'],
            data2 :[
              {
                sample:  {
                  test: ['not here', 'not here', 'not here'],
                  moreTests: {
                    list: ['not here', 'not here'],
                    list2: ['not here']
                  }
                }
              }
            ]
          }
        ] 
      }

    ]
  }
]
