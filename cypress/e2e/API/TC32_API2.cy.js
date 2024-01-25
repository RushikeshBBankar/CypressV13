describe('Api Demo 2',()=>{
        it('GET Method',()=>{
                cy.request('GET','https://api.realworld.io/api/tags').then((response)=>{
                    expect(response.status).equal(200)
                    expect(response.body.tags[0]).equal('est')
                })
            })
         
})